import { ApiService } from "../Api/api.service";
import { LoginRequestDto, LoginResponseDto, RegisterRequestDto, RegisterResponseDto } from "../../../Common/ApiDto/auth.dto";

class AuthService extends ApiService {
  public async login(data: LoginRequestDto): Promise<LoginResponseDto> {
    const { userId, access_token } = await this.requestService.post<LoginResponseDto, LoginRequestDto>(`login`, data);
    return { userId, access_token };
  }

  public async register(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    return await this.requestService.post<RegisterResponseDto, RegisterRequestDto>(`register`, data);
  }

  public async logout(): Promise<void> {
    return await this.requestService.post(`logout`, {});
  }
}

export default new AuthService("auth");
