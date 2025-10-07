import React from "react";

const ManuLinkPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>ManuLink 宏利通</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>名稱</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>中文意思</th>
            <th style={{ border: "1px solid #ccc", padding: 8 }}>特點</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>ManuLink</td>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>宏利通</td>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>
              靈活投資選擇、保費彈性、長遠儲蓄增值、專業資產管理
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManuLinkPage;
