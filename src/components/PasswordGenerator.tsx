import { useState } from "react";

const generatePassword = (length: number): string => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength);
    setPassword(newPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = parseInt(event.target.value);
    setPasswordLength(newLength);
  };

  return (
    <div>
      <label htmlFor="password-length">Password Length:</label>
      <br />
      <input
        type="range"
        id="password-length"
        min="8"
        max="32"
        value={passwordLength}
        onChange={handleLengthChange}
      />
      <span>{passwordLength}</span>
      <br />
      <button style={{width:"300px", padding:"8px", borderRadius:"8px", fontWeight:"600"}} onClick={handleGeneratePassword}>Generate Password</button>
      <hr />
      <p> Here is your Strong password:  {password}</p>
      <hr />
      <button style={{width:"300px", padding:"8px", borderRadius:"8px", fontWeight:"600"}} onClick={handleCopyPassword}>Copy Password</button>
    </div>
  );
};

export default PasswordGenerator;
