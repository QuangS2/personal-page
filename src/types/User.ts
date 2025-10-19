export interface User {
  id: string; // IdentityUser.Id là string (GUID)
  userName: string;
  email: string;
  phoneNumber?: string;

  firstName?: string;
  lastName?: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;

  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;

  createdAt: string;  // DateTime => string khi trả về JSON
  updatedAt: string;
}

