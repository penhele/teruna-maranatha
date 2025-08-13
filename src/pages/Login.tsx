import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import supabase from "@/supabase-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        navigate("/admin", { replace: true });
      }
    };
    checkSession();
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      navigate("/admin");
      return null;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-[#f8f4ec]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col gap-6 max-w-xl w-full m-5">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Login to admin account</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="johndoe@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>

                  {message && <p className="text-red-500 text-sm">{message}</p>}

                  <CardFooter className="p-0">
                    <Button className="w-full bg-[#ffcc84]" type="submit">
                      Login
                    </Button>
                  </CardFooter>
                </div>
              </form>
            </CardContent>
          </Card>

          <p className="text-center">
            Persekutuan Teruna GPIB Maranatha Jakarta
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
