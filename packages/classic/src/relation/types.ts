import { $schema } from "../component/symbols"
import { ComponentType } from "../component/types"
import { Schema } from "../storage/types"
import { World } from "../world/types"
import { $autoRemoveSubject, $onTargetRemoved, $pairsMap } from "./symbols"

export type OnTargetRemovedCallback = (world: World, subject: number, target: number) => void

export type RelationOptions = {
    autoRemoveSubject?: boolean
    onTargetRemoved?: OnTargetRemovedCallback
}

export type RelationType<T extends Schema> = T & {
    [$pairsMap]: Map<number | string, ComponentType<T>>
    [$schema]: Schema
    [$autoRemoveSubject]: boolean
    [$onTargetRemoved]: OnTargetRemovedCallback
} & ((target: string | number) => ComponentType<T>)
