import {SetMetadata} from '@nestjs/common'
import {RoleEnum} from '../enums/role.enum'

const key = 'roles'
export const Roles = (...roles: RoleEnum[]) => SetMetadata(key, roles)
