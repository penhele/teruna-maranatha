import supabase from "@/supabase-client";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("login");
  };

  return (
    <div>
      <h1>halaman admin</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Admin;
