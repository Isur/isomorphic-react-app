import Container, { Service } from "typedi";
import { Job } from "./Job";
import { OldSessionsJob } from "./StartJobs";

@Service()
export class StartJobs {
  private _jobs: Job[] = [
    Container.get(OldSessionsJob),
  ];

  public startJobs = async () => {
    for(const job of this._jobs) {
      await job.Run();
    }
  };
}
