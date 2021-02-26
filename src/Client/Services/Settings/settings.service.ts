import { ApiService } from "../Base/api.service";
import { GetSettingsResponseDto } from "../../../Common/ApiDto/settings.dto";
import { BackendPaths } from "../../../Common/Routes";

class SettingsService extends ApiService {
  public async getSettings(): Promise<GetSettingsResponseDto> {
    return await this.requestService.get<GetSettingsResponseDto>("");
  }
}

export default new SettingsService(BackendPaths.settings);
