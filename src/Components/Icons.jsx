// Icons.jsx
import React from "react";
import "./Icons.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";




// Define individual icons using Font Awesome classes
const HomeIcon = () => <i className="icon fas fa-home"></i>;
const SearchIcon = () => <i className="icon fas fa-search"></i>;
const UserIcon = () => <i className="icon fas fa-user"></i>;
const SettingsIcon = () => <i className="icon fas fa-cog"></i>;
const NotificationIcon = () => <i className="icon fas fa-bell"></i>;
const EditIcon = () => <i className="icon fas fa-edit"></i>;
const DeleteIcon = () => <i className="icon fas fa-trash"></i>;
const AddIcon = () => <i className="icon fas fa-plus-circle"></i>;
const BackArrowIcon = () => <i className="icon fas fa-arrow-left"></i>;
const ForwardArrowIcon = () => <i className="icon fas fa-arrow-right"></i>;
const RefreshIcon = () => <i className="icon fas fa-sync"></i>;
const UploadIcon = () => <i className="icon fas fa-upload"></i>;
const DownloadIcon = () => <i className="icon fas fa-download"></i>;
const HeartIcon = () => <i className="icon fas fa-heart"></i>;
const StarIcon = () => <i className="icon fas fa-star"></i>;
const ChatIcon = () => <i className="icon fas fa-comment"></i>;
const LockIcon = () => <i className="icon fas fa-lock"></i>;
const UnlockIcon = () => <i className="icon fas fa-unlock"></i>;
const CameraIcon = () => <i className="icon fas fa-camera"></i>;
const ShareIcon = () => <i className="icon fas fa-share"></i>;
const EyeIcon = () => <i className="icon fas fa-eye"></i>;
const EyeSlashIcon = () => <i className="icon fas fa-eye-slash"></i>;

const Navbar = () => {
  return (
    <nav>
      <HomeIcon />
      <SearchIcon />
      <UserIcon />
      <SettingsIcon />
    </nav>
  );
};

// Export icons as a single object
export {
  HomeIcon,
  SearchIcon,
  UserIcon,
  SettingsIcon,
  NotificationIcon,
  EditIcon,
  DeleteIcon,
  AddIcon,
  BackArrowIcon,
  ForwardArrowIcon,
  RefreshIcon,
  UploadIcon,
  DownloadIcon,
  HeartIcon,
  StarIcon,
  ChatIcon,
  LockIcon,
  UnlockIcon,
  CameraIcon,
  ShareIcon,
  EyeIcon,
  EyeSlashIcon,
};
