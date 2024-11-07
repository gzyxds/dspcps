SaaSBold 是一个为Next.js设计的全栈SaaS模板——在前端和后端功能上都经过精心设计。开发体验是关键关注点，它集成了所有必要的特性，并且可以在Vercel上一键部署。

![saasbold](https://github.com/SaaSBold/saasbold-lite/assets/1244883/6ff1e518-d448-4a9a-a609-fc9a67959d94)



将 zip 文件和 cd 解压缩到模板文件夹中。现在运行以下命令来安装依赖项：

复制
```
npm install
```
或

复制
```
yarn install
如果上述命令不起作用，请尝试：
``
复制
```
npm install --legacy-peer-deps
```
它将解决所有与 Peer 节点依赖关系相关的问题。

这将安装所有依赖项。
现在，请按照以下步骤完成所有集成：


Database  https://docs.saasbold.com/installation#id-1.-database

Authentication https://docs.saasbold.com/installation#id-2.-authentication

Stripe  https://docs.saasbold.com/integrations/stripe

Sanity  https://docs.saasbold.com/integrations/sanity

Algolia  https://docs.saasbold.com/integrations/algolia

Mailchimp  https://docs.saasbold.com/integrations/mailchimp

Resend  https://docs.saasbold.com/integrations/resend   

完成所有集成后，现在可以在本地服务器上启动项目
```
npm run dev
```
它将在 http://localhost:3000
npm run dev
它将在 http://localhost:3000

在 PaaS 上部署
如果您使用的是 GitHub 存储库，那么您可以使用免费且易于使用的选项，例如 Vercel 或 Netlify，它们为 Next.js 托管提供体面的免费层。

由于我们使用的是 Prisma ORM，因此请确保在部署到 Vercel 时像这样编辑构建命令。


在 Vercel 上部署
复制
```
prisma generate && npm run build


#### [🚀 在线演示](https://demo.saasbold.com/)
#### [📘 文档](https://docs.saasbold.com/)
#### [☕ 官网](https://saasbold.com/)
#### [🔥 价格与常见问题](https://saasbold.com/#pricing)


## SaaSBold 特性和集成 ⚡
![integrations](https://github.com/SaaSBold/saasbold-lite/assets/1244883/4c89006b-892d-4b78-9576-93daa6ca3696)

### 💳 支付与订阅
- 集成Stripe进行用户计费
- 即将支持Paddle和LemonSqueezy

### 🔒 认证
- 魔法链接、社交登录/认证、邮箱/密码认证
- 用户数据在PostgreSQL中的自动同步
- 私有/受保护页面及API调用

### 📧 邮件
- 无缝交易邮件解决方案
- 内置多种用途的邮件模板

### 🛠️ 数据库
- 集成Prisma的即用型PostgreSQL数据库
- 轻松切换到其他数据库如MySQL或MongoDB
- 高效性能和数据库管理

### 👩‍💼 管理员仪表板
- 管理用户角色、权限和访问控制
- 管理员仪表板的UI组件

### 👤 用户仪表板
- 控制账户设置和个人偏好
- 具有流畅API集成的直观界面

### 📰 营销/新闻通讯
- 自动将新用户添加到MailChimp列表
- 向您的SaaS用户群发送新闻通讯

### ✨ AI集成
- 集成Open AI的即用型AI

### 🔍 Algolia集成
- 用于站点搜索的即用型Algolia集成

### 🙌 SaaSBold免费版、入门版和专业版的详细对比

| 功能             | Lite | Starter | Professional |
|------------------|------|---------|--------------|
| Next.js 落地页   | ✅ 是 | ✅ 是    | ✅ 是         |
| 所有集成         | ❌ 否 | ✅ 是    | ✅ 是         |
| 带Sanity的功能博客| ❌ 否 | ✅ 是    | ✅ 是         |
| 功能管理员仪表板 | ❌ 否 | ❌ 否    | ✅ 是         |
| 功能用户仪表板   | ❌ 否 | ❌ 否    | ✅ 是         |
| Figma 设计源文件  | ❌ 否 | ❌ 否    | ✅ 是         |
| 商业项目使用     | ✅ 是 | ✅ 是    | ✅ 是         |
| 终身免费更新     | ✅ 是 | ✅ 是    | ✅ 是         |
| 邮件支持         | ❌ 否 | ✅ 是    | ✅ 是         |
| 社区支持         | ✅ 是 | ✅ 是    | ✅ 是         |
///