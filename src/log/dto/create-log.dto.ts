export class CreateLogDto {
    readonly url: string;
    readonly description: string;
    readonly username?: string;
    readonly password?: string;
    readonly items?: Array<any>;
}