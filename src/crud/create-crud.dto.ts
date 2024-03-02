import { ApiProperty } from "@nestjs/swagger";

export class CreateCrudDto {
    @ApiProperty({type: Number, description: 'ID'})
    readonly id: number;
    @ApiProperty({type: String, description: 'Titulo do crud'})
    readonly title: string;
    @ApiProperty({type: String, description: 'Descricao do crud'})
    readonly description: string;
}