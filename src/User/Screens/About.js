import React from "react";
import { StyleRoot } from "radium";
export default function About() {
  return (
    <StyleRoot>
      <div>
        <h2 style={{ margin: 2 }}>投票须知</h2>
        <p>请阅读以下指引 :</p>
        <p>1. 选民注册</p>
        <ul>
          <li>
          进行投票之前用户需要首先注册，进行选民登记。
          </li>
          <li>
          选民只能在登记阶段进行登记，注册阶段结束，用户无法注册，将不能投票。
          </li>
          <li>
          为了注册，用户必须输入手机号用于身份验证。
          </li>
          <li>完成流程后用户将注册成功，可以进行投票。</li>
        </ul>
        <p>2.投票流程</p>
        <ul>
          <li>
          整个投票过程分为3个阶段由管理员初始化和终止。
          </li>
        </ul>
        <ol>
          <li>
            <b>注册阶段:</b> 在这一阶段，将对用户进行选民登记。
          </li>
          <li>
            <b>投票阶段:</b> 在管理员初始化投票阶段后，用户可以在投票部分进行投票。点击“投票”按钮之后将启动交易，确认交易后将成功投票。投票阶段结束后，用户将无法投票。
          </li>
          <li>
            <b>结果公示阶段: </b>在投票结果区域可查看投票结果。
          </li>
        </ol>
      </div>
    </StyleRoot>
  );
}
