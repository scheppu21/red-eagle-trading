import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UseContext';
import { auth, db } from '../firebaseConfig';
import { deleteUser, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { FiPlus, FiLogOut, FiTrash } from 'react-icons/fi'; // ✅ React Icons
import './ProfileMenu.css';

const ProfileMenu = ({ onClose }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [address, setAddress] = useState('');

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      try {
        await deleteUser(currentUser);
        alert("Account deleted.");
        navigate('/');
      } catch (error) {
        alert("Error deleting account: " + error.message);
      }
    }
  };

  const handleAddressSubmit = async () => {
    if (!address) return alert("Please enter an address");
    try {
      await setDoc(doc(db, "users", currentUser.uid), { address }, { merge: true });
      alert("Address saved successfully!");
      setShowAddressInput(false);
      setAddress('');
    } catch (error) {
      alert("Error saving address: " + error.message);
    }
  };

  return (
    <div className="profile-menu">
      <h3>{currentUser?.displayName || 'User'}</h3>
      <p>{currentUser?.email}</p>

      <button onClick={handleLogout}>
        <FiLogOut style={{ marginRight: '6px' }} />
        Logout
      </button>

      <button onClick={handleDelete} className="danger">
        <FiTrash style={{ marginRight: '6px' }} />
        Delete Account
      </button>

      <div className="address-section">
        {!showAddressInput ? (
          <button onClick={() => setShowAddressInput(true)} className="add-address-btn">
            <FiPlus style={{ marginRight: '6px' }} />
            Add Address
          </button>
        ) : (
          <>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address..."
              className="address-textarea"
            />
            <button onClick={handleAddressSubmit} className="submit-address-btn">
              Save Address
            </button>
          </>
        )}
      </div>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProfileMenu;