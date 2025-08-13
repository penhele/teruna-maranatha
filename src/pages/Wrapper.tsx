import supabase from "@/supabase-client";
import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";

function Wrapper({ children }: { children: JSX.Element }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setAuthenticated(!!session);
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setAuthenticated(!!session);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    if (authenticated) {
      return <>{children}</>;
    }
    return <Navigate to="/login" />;
  }
}

export default Wrapper;
