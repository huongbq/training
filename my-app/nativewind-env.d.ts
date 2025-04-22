/// <reference types="nativewind/types" />

declare module "nativewind" {
  import type { ComponentProps } from "react";
  import type { View as NativeView } from "react-native";

  export type StyledComponent<T> = T & {
    className?: string;
  };

  export interface StyledComponentProps<T> extends ComponentProps<T> {
    className?: string;
  }
}
