export interface RegisterRequestDto {
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
}

export type RegisterResponseDto = string;

export interface LoginRequestDto {
  email: string,
  password: string,
}

export interface LoginResponseDto {
  access_token: string,
  userId: string,
}

export interface InitFetchDto {
  userId: string,
}
