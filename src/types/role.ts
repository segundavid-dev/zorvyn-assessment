export type Role = "viewer" | "admin";

export interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
}
