// Create derived types (UserPublic, UserPreview, UserRecord) and implement a generic pickFields function.

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  address?: {
    street: string;
    city: string;
    country: string;
  };
  createdAt: Date;
}

// Tasks:
// 1. Create UserPublic: Remove sensitive and internal fields (password, createdAt) and make email optional.
// 2. Create UserPreview: Extract only essential identification fields (id, name).
// 3. Create UserRecord: Map all user object properties to boolean values.
// 4. Implement generic function pickFields to safely select specific properties from an object.