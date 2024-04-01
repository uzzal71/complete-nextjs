export default function DashboardLayout({ children }) {
  throw new Error("Error occurred in dashboard layout");

  return (
    <>
      <div className="p-4">
        <ul className="flex gap-5">
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>
      {children}
    </>
  );
}
