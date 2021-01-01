import { ApiService } from "../Api/api.service";
import { InitFetchDto, LoginRequestDto, LoginResponseDto, RegisterRequestDto, RegisterResponseDto } from "../../../Common/ApiDto/auth.dto";

class AuthService extends ApiService {
  async login(data: LoginRequestDto): Promise<LoginResponseDto> {
    const { userId, access_token } = await this.requestService.post<LoginResponseDto, LoginRequestDto>(`login`, data);
    return { userId, access_token };
  }

  async register(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    return await this.requestService.post<RegisterResponseDto, RegisterRequestDto>(`register`, data);
  }

  async logout(): Promise<void> {
    return await this.requestService.get(`logout`);
  }

  async initFetch(): Promise<string> {
    const { userId } = await this.requestService.get<InitFetchDto>("profile");
    return userId;
  }
}

export default new AuthService("auth");
