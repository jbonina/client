

export class CreateErrorLogDTO {
    errorMsg: string;

    readonly errorStackTrace: string;

    readonly IPAddress: string;

    readonly Port: number;

    readonly ExtIPAddress: string;

    readonly ExtPort: number;

    readonly ServernameFQDN: string;

    readonly ApplicationName: string;

    readonly ApplicationVersion: string;

    readonly ApplicationErrorLevel: number;

    readonly DateTime: Date;
}

