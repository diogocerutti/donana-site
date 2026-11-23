import AdminHeader from "./_components/header/adminHeader";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
    </>
  );
}
