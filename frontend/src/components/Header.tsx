interface HeaderProps {
  userEmail: string;
  onSignOut: () => void;
}

export default function Header({ userEmail, onSignOut }: HeaderProps) {
  return (
    <div className="p-4">
      <p className="text-sm text-gray-700 mb-2">Logged in as: {userEmail}</p>
      <button
        onClick={onSignOut}
        className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}