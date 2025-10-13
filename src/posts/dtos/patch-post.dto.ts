import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class PatchPostsDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The ID of the post to be updated',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
