import { ApiService } from "../Base/api.service";
import { GetSettingsResponseDto } from "@shared/ApiDto/settings.dto";
import { BackendPaths } from "@shared/Routes";

class SettingsService extends ApiService {
  public async getSettings(): Promise<GetSettingsResponseDto> {
    return await this.requestService.get<GetSettingsResponseDto>("");
  }
}

export default new SettingsService("settings");
