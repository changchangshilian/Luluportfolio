
/**
 * 触发 Base64 编码字符串的下载或预览。
 * 针对中国常用移动端环境（如微信内置浏览器、手机 Safari）进行了兼容性优化。
 * @param base64 Base64 数据字符串
 * @param fileName 下载时的文件名
 * @param mimeType 文件的 MIME 类型
 */
export const downloadBase64File = (base64: string, fileName: string, mimeType: string) => {
  // 环境检测：检测是否为移动端或微信
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

  try {
    // 1. 处理 Base64 字符串，去除可能存在的空格或换行符
    const cleanBase64 = base64.replace(/\s/g, '');
    const byteCharacters = atob(cleanBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    const blobUrl = URL.createObjectURL(blob);

    // 2. 针对特殊环境的兼容逻辑
    // 微信内置浏览器：几乎 100% 拦截 Blob 下载，采用“新页面打开”策略，引导用户长按保存或使用系统浏览器打开
    // 手机端 PDF：在新标签页打开预览通常比强制下载体验更好
    if (isWeChat || (isMobile && mimeType === 'application/pdf')) {
      const newWin = window.open(blobUrl, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        // 如果被弹出窗口拦截器拦截，则尝试在当前页跳转
        window.location.href = blobUrl;
      }
      // 延迟释放，确保浏览器有足够时间读取 Blob（移动端建议保留更久）
      setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
      return;
    }

    // 3. PC 端常规下载逻辑
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    
    // 清理 DOM 和内存
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(blobUrl);
    }, 1000);
  } catch (error) {
    console.error("Blob 下载失败，尝试使用 Data URL 兜底:", error);
    
    // 最终兜底方案：直接使用 Data URI
    const dataUrl = `data:${mimeType};base64,${base64}`;
    try {
      const win = window.open();
      if (win) {
        win.document.write(`<iframe src="${dataUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
      } else {
        window.location.href = dataUrl;
      }
    } catch (e) {
      window.location.href = dataUrl;
    }
  }
};
