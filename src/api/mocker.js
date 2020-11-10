import { signInAjaxMock } from "./user";
import { getUserListAjaxMock } from "./other";

if (process.env.NODE_ENV === "development") {
  const Mock = require("mockjs");

  Mock.mock(
    getUserListAjaxMock[0],
    getUserListAjaxMock[1],
    getUserListAjaxMock[2]
  );
  Mock.mock(signInAjaxMock[0], signInAjaxMock[1], signInAjaxMock[2]);
}
