import { PollyClient, StartSpeechSynthesisTaskCommand, StartSpeechSynthesisTaskCommandInput } from "@aws-sdk/client-polly";
import { IText } from "Domain/Models/IText";
import { BaseRepository } from "Infrastructure/Repository/BaseRepository";
import { inject } from "tsyringe";

class PollyRepository {

    constructor(
        @inject(PollyClient) private readonly client: PollyClient
    ) { }

    StartSpeechSynthesis = async (text: IText): Promise<boolean> => {
        const commandInput: StartSpeechSynthesisTaskCommandInput = {
            OutputFormat: "mp3",
            OutputS3BucketName: process.env.BucketName,
            Text: text.GetContent(),
            TextType: "text",
            VoiceId: "Joanna",
            SampleRate: "22050",
        };

        await this.client.send(new StartSpeechSynthesisTaskCommand(commandInput));

        return true;
    }

}

export { PollyRepository };