import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <div className="bg-[#f8f4ec]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col gap-6 max-w-xl w-full m-5">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Login to admin account</CardTitle>
            </CardHeader>

            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="username">Username</Label>
                    <input
                      id="username"
                      type="text"
                      placeholder="username"
                      className="rounded-lg border-2 border-gray-300 px-4 py-2"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label htmlFor="password">Password</Label>
                    <input
                      id="password"
                      type="password"
                      placeholder="password"
                      className="rounded-lg border-2 border-gray-300 px-4 py-2"
                      required
                    />
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-[#ffcc84]">Login</Button>
            </CardFooter>
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
