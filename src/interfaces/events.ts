import { EventObject } from "xstate";

export interface LogoutEvent extends EventObject {
  type: "LOGOUT";
}
