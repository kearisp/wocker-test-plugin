import {
    Injectable,
    DockerService,
    ProjectService,
    Cli,
    Plugin
} from "@wocker/core";


@Injectable()
export default class TestPlugin extends Plugin {
    public constructor(
        protected dockerService: DockerService,
        protected projectService: ProjectService
    ) {
        super();
    }

    public install(cli: Cli) {
        cli.command("test:init")
            .action(() => this.init());
    }

    public async init() {
        const project = await this.projectService.get();

        return `Current project: ${project.name}\n`;
    }
};
