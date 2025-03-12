document.addEventListener("DOMContentLoaded", function () {
    var textarea = document.getElementById("code-editor");

    // 确保 CodeMirror 只初始化一次
    if (!textarea.dataset.cmInitialized) {
        var editor = CodeMirror.fromTextArea(textarea, {
            mode: "javascript",  // 默认语言
            theme: "monokai",    // 主题风格
            lineNumbers: true,   // 显示行号
            autoCloseBrackets: true, // 自动补全括号
            matchBrackets: true,  // 括号匹配
            tabSize: 4,          // Tab 大小
            indentUnit: 4,       // 缩进单位
            lineWrapping: true   // 自动换行
        });

        textarea.dataset.cmInitialized = "true"; // 标记已经初始化
    }
    // 监听语言选择变化
    document.getElementById("language-select").addEventListener("change", function () {
      var newMode = this.value;
      editor.setOption("mode", newMode);
    });
});

