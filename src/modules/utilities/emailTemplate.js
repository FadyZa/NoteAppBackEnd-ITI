
export default function emailTemplate(email){
    return `
    <!DOCTYPE html>
<html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="x-apple-disable-message-reformatting">
<title>Mytitle</title>
<!--[if mso]>
<noscript>
	<xml>
		<o:OfficeDocumentSettings>
			<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
</noscript>
<![endif]--> <!--[if (gte mso 9)|(IE)]>
<style>
	table,td,p,a,span {font-family: Arial, sans-serif !important;}
	a {text-decoration: none;}
</style>
<![endif]-->
<style>
	html,
	body {
	margin: 0 auto !important;
	padding: 0 !important;
	height: 100% !important;
	width: 100% !important;
	}
	div[style*="margin: 16px 0"] {
	margin: 0 !important;
	}
	table,
	td {
	mso-table-lspace: 0pt !important;
	mso-table-rspace: 0pt !important;
	}
	table {
	border-spacing: 0 !important;
	border-collapse: collapse !important;
	table-layout: fixed !important;
	margin: 0 auto !important;
	mso-table-lspace: 0;
	mso-table-rspace: 0;
	}
</style>
<style id="layout">
	.cc-one-third {
	width: 100% !important;
	max-width: 33.3% !important;
	}
	@media screen and (max-width:600px) {
	.cc-one-third {
	width: 100% !important;
	max-width: 600px !important;
	}
	}
</style>
<style>
	.tl_align{
	text-align:left !important;
	}
	.tl_img_container{
	margin-left:200px;
	}
	.tl_inner_div{
	margin-left:0px !important;
	margin-top:0 !important;
	}
	@media screen and (max-width:600px) {
	.tl_align{
	text-align:center !important;
	}
	.tl_img_container {
	max-height:100px !important;
	margin:0 auto !important;
	}
	.tl_img_container img {
	margin:0 auto !important;
	}
	.tl_inner_div{
	margin:0 auto !important;
	}
	.tl_inner_div table{
	max-width:300px !important;
	}
	}
</style>
<style>
	.tr_align{
	text-align:left !important;
	}
	.tr_img_container{
	margin-left:0px;
	}
	.tr_inner_div{
	margin-left:200px !important;
	margin-top:0 !important;
	}
	@media screen and (max-width:600px) {
	.tr_align{
	text-align:center !important;
	}
	.tr_img_container {
	max-height:100px !important;
	margin:0 auto !important;
	}
	.tr_img_container img {
	margin:0 auto !important;
	}
	.tr_inner_div{
	margin:0 auto !important;
	}
	.tr_inner_div table{
	max-width:300px !important;
	}
	.bg_img{
		height:300px !important;
		object-fit: cover !important;
	}
	}
</style>
</head>
<body style="margin: 0 auto !important; padding: 0 !important;word-spacing:normal;background-color: #f2f2f2;">
	<div role="article" aria-roledescription="email" aria-label="Mytitle" lang="en" dir="ltr" style="width: 100%;background-color:#f2f2f2">
	<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f2f2f2;"><tr><td><![endif]-->
	<div style="display:none;max-height:0;overflow:hidden">my preheader&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
		&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
		&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
		&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
		&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;
		&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;&nbsp;
		</div>
		<div style="max-width:600px; margin: 0 auto;">
		<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="600" role="presentation"><tr><td align="center" valign="top"><![endif]--> 
			<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;background-color:#f2f2f2">
				<tr>
					<td style="font-size:0;background-color:#4e8991">
					<!--[if (gte mso 9)|(IE)]><table role="presentation" border="0" cellspacing="0" cellpadding="0" width="600"><tr><td valign="top" width="33.3%"><![endif]-->
						<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">
								<tr>
									<td style="font-family:Arial,sans-serif;font-size:14px;color:#fffff0;padding:10px;text-align:center">
										<p style="margin:0">Lorem</p>
										<p style="margin:0">ipsum</p>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="33.3%"><![endif]-->
						<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">
								<tr>
									<td style="font-family:Arial,sans-serif;font-size:14px;color:#fffff0;padding:10px;text-align:center">
										<h1 style="font-family:Arial,sans-serif;font-size:20px;text-trasnform:uppercase;color:#fffff0">Lorem ipsum</h1>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]></td><td valign="top" width="33.3%"><![endif]-->
						<div style="display:inline-block; margin:0; width:100%; min-width:160px;vertical-align:top;" class="cc-one-third">
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;">
								<tr>
									<td style="font-family:Arial,sans-serif;font-size:14px;color:#fffff0;padding:10px;text-align:center">
										<p style="margin:0">Lorem ipsum</p>
									</td>
								</tr>
							</table>
						</div>
						<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
				<tr>
					<td style="font-size:0;background-color:#4e8991">
					<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="600" role="presentation"><tr><td><![endif]-->
						<table align="center" role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:80%">
							<tr>
								<td height="1" width="100%" style="font-size: 0; line-height: 0; border-top: 1px solid #fffff0"></td>
							</tr>
						</table>
						<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
				<tr>
					<td style="font-size:0;background-color:#4e8991">
					<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="600" role="presentation"><tr><td><![endif]-->
						<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%">
							<tr>
								<td style="font-family:Arial,sans-serif;font-size:18px;color:#fffff0;padding:10px;text-align:center">
									<p style="margin:0">Lorem ipsum dolor sit amet </p>
								</td>
							</tr>
						</table>
						<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
				<tr>
					<td style="font-size:0;">
						<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="600" role="presentation"><tr><td><![endif]-->
						<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%; background-color: #fcf5ef;">
							<tr>
								<td width="10%" valign="top">
									<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%">
										<tr>
											<td height="250" style="background-color:#4e8991;height:250px"></td>
										</tr>
										<tr>
											<td></td>
										</tr>
									</table>
								</td>
								<td style="font-family:Arial,sans-serif;font-size:18px;color:#fffff0">
									<img class="bg_img" src="https://picsum.photos/500/300" alt="" width="500" style="width:100%;max-width:500px;height:auto;display:block;margin:0">
								</td>
								<td width="10%" valign="top">
									<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%">
										<tr>
											<td height="250" style="background-color:#4e8991;height:250px"></td>
										</tr>
										<tr>
											<td></td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
						<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
				<tr>
					<td style="font-size:0;background-color:#fcf5ef">
						<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="600" role="presentation"><tr><td><![endif]-->
						<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%">
							<tr>
								<td style="font-family:Arial,sans-serif;font-size:18px;color:#4e8991;padding:30px;text-align:center">
									<h2 style="margin:0;font-family:Arial,sans-serif;font-size:18px;color:#4e8991;">Lorem ipsum & dolor sit</h2>
								</td>
							</tr>
						</table>
						<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
				<tr>
					<td style="font-size:0;background-color:#fcf5ef">
						<!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="600" role="presentation"><tr><td><![endif]-->
						<table role="presentation" border="0" cellspacing="0" cellpadding="0" style="width:100%">
							<tr>
								<td style="font-family:Arial,sans-serif;font-size:18px;color:#4e8991;padding:10px;text-align:center">
									<p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
								</td>
							</tr>
							<tr>
								<td style="font-family:Arial,sans-serif;font-size:18px;color:#4e8991;padding:20px;font-weight:bold;text-align:center">
									<p style="margin:0">Lorem ipsum dolor sit amet consectetur</p>
								</td>
							</tr>
							<tr>
								<td style="padding:20px;">
									<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
										<tr>
											<td style="background:#4e8991;text-align:center">
												<a href="http://localhost:3000/verify/${email}" style="border: 1px solid #4e8991; font-family: Verdana, Arial,sans-serif; font-size:14px; mso-line-height-rule: exactly;line-height: 14px; text-decoration: none; padding: 10px 31px; color: #ffffff; font-weight:bold;display: block;">
												<strong>Verfication</strong>
												</a>
											</td>
										</tr>
									</table>
	</body>
</html>
    `
}