import requests
import json
import re
import os
import time

def clean_html_text(text):
    """清理HTML文本，去除标签并处理特殊字符"""
    if not text:
        return ""

    # 移除HTML标签
    text = re.sub(r'<[^>]+>', '', text)

    # 可选：处理HTML实体
    text = text.replace('&nbsp;', ' ').replace('&amp;', '&')
    text = text.replace('&lt;', '<').replace('&gt;', '>')
    text = text.replace('&quot;', '"').replace('&#39;', "'")

    # 去除多余的空格和换行
    text = re.sub(r'\s+', ' ', text).strip()

    return text


def fetch_isp_data(url):
    """从指定URL获取ISP数据"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"获取数据失败: {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"解析JSON失败: {e}")
        return None

def generate_markdown_content1(isp_data):
    """根据ISP数据生成Markdown内容"""
    content = "<!-- ISP1 START -->\n\n"

# ## 狗狗加速
# :::tip [**【狗狗加速】**](https://2r.x31415926.top/redir?i=3eb)

# - 高性能海外机场，❇️❇️免费试用3天❇️❇️，解锁流媒体，全球首家支持 Hysteria 协议。集群负载均衡设计，高速专线(兼容老客户端)，极低延迟，无视晚高峰，4K 秒开。充值满100送10
# :::

    for isp in isp_data:
        pick = isp.get('pick', 0)
        if pick<100:
            continue

        name = isp.get('name','')
        desp = isp.get('desp', '')
        url = isp.get('url', '')

        desp_clear = clean_html_text(desp)

        # 生成Markdown格式
        content += f"## {name}\n"
        content += f":::tip [**【{name}】**]({url})\n"
        content += f"- {desp_clear}\n:::\n\n"

    content += "<!-- ISP1 END -->"
    return content

def generate_markdown_content2(isp_data):
    """根据ISP数据生成Markdown内容"""
    content = "<!-- ISP2 START -->\n\n"

    for isp in isp_data:
        pick = isp.get('pick', 0)
        if pick>99:
            continue

        name = isp.get('name', '')
        desp = isp.get('desp', '')
        url = isp.get('url', '')

        desp_clear = clean_html_text(desp)

        # 生成Markdown格式
        content += f"### {name}\n"
        content += f"- {desp_clear}\n"
        content += f"- [点击前往 **【{name}】**]({url})\n\n"

    content += "<!-- ISP2 END -->"
    return content

def update_markdown_file(file_path, isp_data):
    """更新Markdown文件中的ISP列表"""
    try:
        # 读取原始文件
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # 生成新的ISP1内容
        new_isp_content = generate_markdown_content1(isp_data)
        # 使用正则表达式替换ISP1部分
        pattern = r'<!-- ISP1 START -->.*?<!-- ISP1 END -->'
        updated_content = re.sub(pattern, new_isp_content, content, flags=re.DOTALL)

        # 生成新的ISP2内容
        new_isp_content = generate_markdown_content2(isp_data)
        # 使用正则表达式替换ISP2部分
        pattern = r'<!-- ISP2 START -->.*?<!-- ISP2 END -->'
        updated_content = re.sub(pattern, new_isp_content, updated_content, flags=re.DOTALL)

        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)

        print(f"成功更新文件: {file_path}")
        return True

    except FileNotFoundError:
        print(f"文件未找到: {file_path}")
        return False
    except Exception as e:
        print(f"更新文件时出错: {e}")
        return False

def main():
    # 生成11位时间戳（秒级时间戳，去掉最后一位）
    timestamp = str(int(time.time()))[:-1]
    filelist = {
        'cn': 'cn.mdx',
        'ru': 'ru.md',
    }

    # 获取当前脚本的绝对路径
    current_script_path = os.path.abspath(__file__)
    # 获取scripts目录路径
    scripts_dir = os.path.dirname(current_script_path)
    # 获取root目录路径（scripts的父目录）
    root_dir = os.path.dirname(scripts_dir)


    for area,fname in filelist.items():
        json_url = f"https://redir.x31415926.top/{area}.json?t={timestamp}"

        # 构建markdown文件路径
        markdown_file = os.path.join(root_dir, 'blog', 'isp', fname)

        # 获取数据
        print("正在从服务器获取数据...")
        isp_data = fetch_isp_data(json_url)

        if isp_data is None:
            print("获取数据失败，程序退出")
            return

        print(f"成功获取{area} {len(isp_data)} 条ISP数据")

        # 更新Markdown文件
        print(f"正在更新Markdown文件 {fname}...")
        success = update_markdown_file(markdown_file, isp_data)

        if success:
            print(f"更新{fname}完成！")
        else:
            print(f"更新{fname}失败！")
            break
    #END for
#END main

if __name__ == "__main__":
    main()

