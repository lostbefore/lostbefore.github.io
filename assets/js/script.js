// 平滑滚动功能
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 可以在此添加更多交互功能
    // 例如：技能卡片加载动画
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// 初始化 CodeMirror
var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    mode: "htmlmixed",  // 支持 HTML、CSS、JavaScript
    theme: "material-darker",  // 黑色主题
    lineNumbers: true,  // 显示行号
    autoCloseBrackets: true,  // 自动补全括号
    matchBrackets: true
});

// 运行代码按钮
document.getElementById("run-code").addEventListener("click", function () {
    var code = editor.getValue();
    var iframe = document.getElementById("output");
    iframe.contentDocument.open();
    iframe.contentDocument.write(code);
    iframe.contentDocument.close();
});
