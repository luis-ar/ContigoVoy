export interface User {
  id: number;
  email: string;
  email_verified_at?: Date;
  password: string;
  rol: 'psicologo' | 'marketing' | 'administrador';
  fotoPerfil?: string;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;
}