import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

interface UserFormProps {
  user?: {
    id: string;
    username: string;
    email: string;
    password?: string;
  };
}

export function UserForm({ user }: UserFormProps) {
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one digit";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (!username || !email) {
      setError("Please fill in all fields");
      return;
    }
  
    const passwordError = validatePassword(password);
    if (password && passwordError) {
      setError(passwordError);
      return;
    }
  
    const userData = {
      username,
      email,
      password
    };
  
    try {
      const response = await fetch(`http://localhost:5000/api/users${user ? `/${user.id}` : ''}`, {
        method: user ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(user ? "User updated successfully:" : "User created successfully:", result);
  
      setUsername("");
      setEmail("");
      setPassword("");
      setSuccess(user ? "User updated successfully!" : "User created successfully!");
    } catch (error) {
      console.error(user ? 'Error updating user:' : 'Error creating user:', error);
      setError(user ? 'Failed to update user. Please try again.' : 'Failed to create user. Please try again.');
    }
  };
  
  
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-full justify-center py-10">
      <Typography variant="h4" color="blue-gray" className="text-center max-w-6xl h-full w-full">
        {user ? 'Update User' : 'Create New User'}
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <Button type="submit" className="mt-6" fullWidth>
          {user ? 'Update User' : 'Create New User'}
        </Button>
      </form>
    </Card>
  );
}
