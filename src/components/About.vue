<script setup>
const about = {
  name: '刘同学',
  title: 'Web前端开发工程师',
  description: '热爱前端开发，专注于Vue.js技术栈。具有扎实的计算机科学基础，擅长算法和数据结构，追求代码质量和用户体验的完美统一。',
  selfEvaluation: [
    '良好的编程习惯，注重代码质量和可维护性',
    '积极学习新技术，保持对技术的热情',
    '良好的团队协作能力和沟通能力',
    '具备独立解决问题的能力'
  ],
  education: {
    degree: '计算机科学与技术',
    school: '重点高校',
    period: '2021-2025',
    achievements: [
      '专业成绩优秀，多次获得奖学金',
      '积极参与校内技术社团活动',
      '担任班级技术组组长'
    ]
  },
  skills: [
    {
      category: '前端开发',
      items: [
        { name: 'JavaScript/ES6+', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' },
        { name: 'Vue.js全家桶', link: 'https://cn.vuejs.org/' },
        { name: 'React技术栈', link: 'https://zh-hans.react.dev/' },
        { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { name: 'HTML5/CSS3', link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML' },
        { name: 'Sass/Less', link: 'https://sass-lang.com/' }
      ]
    },
    {
      category: '后端技术',
      items: [
        { name: 'Node.js', link: 'https://nodejs.org/zh-cn' },
        { name: 'Express框架', link: 'https://expressjs.com/' },
        { name: 'RESTful API设计', link: 'https://restfulapi.net/' },
        { name: 'MongoDB', link: 'https://www.mongodb.com/' },
        { name: 'MySQL', link: 'https://www.mysql.com/' }
      ]
    },
    {
      category: '开发工具',
      items: [
        { name: 'Git版本控制', link: 'https://git-scm.com/' },
        { name: 'Webpack/Vite', link: 'https://vitejs.dev/' },
        { name: 'Docker基础', link: 'https://www.docker.com/' },
        { name: 'Linux基础', link: 'https://www.linux.org/' },
        { name: 'VS Code/WebStorm', link: 'https://code.visualstudio.com/' }
      ]
    },
    {
      category: '计算机基础',
      items: [
        { name: '数据结构与算法', link: 'https://leetcode.cn/' },
        { name: '计算机网络', link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP' },
        { name: '操作系统原理', link: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
        { name: '设计模式', link: 'https://refactoringguru.cn/design-patterns' }
      ]
    },
    {
      category: '测试部署',
      items: [
        { name: 'Jest单元测试', link: 'https://jestjs.io/zh-Hans/' },
        { name: 'GitHub Actions', link: 'https://github.com/features/actions' },
        { name: 'CI/CD流程', link: 'https://about.gitlab.com/topics/ci-cd/' },
        { name: '自动化测试', link: 'https://www.selenium.dev/' }
      ]
    }
  ],
  projects: [
    {
      name: '个人博客系统',
      description: '基于Vue3和Node.js的全栈项目',
      features: [
        'Vue3 + TypeScript开发',
        'Express后端API',
        'MongoDB数据存储',
        '支持Markdown编写'
      ],
      link: 'https://github.com/xxx/blog'
    },
    {
      name: '在线笔记应用',
      description: '支持实时协作的笔记应用',
      features: [
        'React + Redux开发',
        'WebSocket实时通信',
        '支持多人协作',
        '自动保存功能'
      ],
      link: 'https://github.com/xxx/notes'
    }
  ],
  certifications: [
    '福建省智能创新大赛二等奖',
    '国家信息安全等级考试（NISP）一级',
    '国家信息安全等级考试（NISP）二级'
  ],
  interests: [
    '算法研究',
    '开源项目',
    '前端工程化',
    '技术分享',
    '人工智能',
    '技术写作'
  ]
}
</script>

<template>
  <div class="about-container">
    <div class="about-header">
      <h1>关于我</h1>
      <p class="intro">{{ about.description }}</p>
    </div>

    <div class="about-content">
      <section class="self-evaluation">
        <h2>自我评价</h2>
        <ul class="eval-list">
          <li v-for="item in about.selfEvaluation" 
              :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="education">
        <h2>教育背景</h2>
        <div class="edu-content">
          <h3>{{ about.education.degree }}</h3>
          <div class="school">{{ about.education.school }}</div>
          <div class="period">{{ about.education.period }}</div>
          <ul class="achievements">
            <li v-for="achievement in about.education.achievements" 
                :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </section>

      <section class="skills">
        <h2>专业技能</h2>
        <div class="skills-grid">
          <div v-for="skill in about.skills" 
               :key="skill.category" 
               class="skill-category">
            <h3>{{ skill.category }}</h3>
            <ul>
              <li v-for="item in skill.items" 
                  :key="item.name">
                <a :href="item.link" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="skill-link">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="projects">
        <h2>项目经验</h2>
        <div class="projects-grid">
          <div v-for="project in about.projects" 
               :key="project.name" 
               class="project-card">
            <h3>{{ project.name }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <ul class="project-features">
              <li v-for="feature in project.features" 
                  :key="feature">
                {{ feature }}
              </li>
            </ul>
            <a :href="project.link" 
               target="_blank" 
               class="project-link">
              查看项目 →
            </a>
          </div>
        </div>
      </section>

      <section class="certifications">
        <h2>获奖证书</h2>
        <ul class="cert-list">
          <li v-for="cert in about.certifications" 
              :key="cert">{{ cert }}</li>
        </ul>
      </section>

      <section class="interests">
        <h2>兴趣方向</h2>
        <div class="interest-tags">
          <span v-for="interest in about.interests" 
                :key="interest" 
                class="tag">
            {{ interest }}
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  animation: fadeInDown 0.8s ease forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.about-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(45deg, #42b883, #35495e);
  border-radius: 2px;
}

.intro {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
}

section {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  animation: slideIn 0.8s ease forwards;
  border: 1px solid #eee;
}

section:nth-child(odd) {
  animation-delay: 0.2s;
}

section:nth-child(even) {
  animation-delay: 0.4s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

section:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

section h2 {
  color: #42b883;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  position: relative;
  padding-left: 1rem;
}

section h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(to bottom, #42b883, #35495e);
  border-radius: 2px;
}

.self-evaluation {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-bottom: 2px solid #eee;
}

.eval-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.eval-list li {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  color: #2c3e50;
  position: relative;
  padding-left: 2.5rem;
  transition: all 0.3s ease;
}

.eval-list li:hover {
  transform: translateY(-3px);
  background: #f0f7f4;
  color: #42b883;
}

.eval-list li::before {
  content: "✨";
  position: absolute;
  left: 1rem;
  opacity: 0.8;
}

.education {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: start;
}

.edu-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #42b883;
  height: fit-content;
}

.edu-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.school {
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.period {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.achievements {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.achievements li {
  color: #666;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  transition: all 0.3s ease;
}

.achievements li:hover {
  color: #42b883;
  transform: translateX(5px);
}

.achievements li::before {
  content: "✓";
  color: #42b883;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.skills {
  grid-column: 2 / -1;
  grid-row: 2 / 4;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.skill-category {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.skill-category:hover {
  transform: translateY(-3px);
  background: #f0f7f4;
}

.skill-category h3 {
  color: #42b883;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  color: #666;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  transition: all 0.3s ease;
}

.skill-category li:hover {
  color: #42b883;
  transform: translateX(5px);
}

.skill-category li::before {
  content: "•";
  color: #42b883;
  position: absolute;
  left: 0;
  font-weight: bold;
  font-size: 1.2rem;
}

.projects {
  grid-column: 1 / -1;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.project-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-top: 4px solid #42b883;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  background: #f0f7f4;
}

.project-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.project-desc {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.project-features li {
  color: #666;
  padding: 0.3rem 0;
  position: relative;
  padding-left: 1.5rem;
  transition: all 0.3s ease;
}

.project-features li:hover {
  color: #42b883;
  transform: translateX(5px);
}

.project-features li::before {
  content: "→";
  color: #42b883;
  position: absolute;
  left: 0;
}

.project-link {
  display: inline-block;
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.project-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #42b883;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.project-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.certifications {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  align-self: start;
}

.cert-list {
  list-style: none;
  padding: 0;
}

.cert-list li {
  background: #f8f9fa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  color: #2c3e50;
  position: relative;
  padding-left: 2.5rem;
  transition: all 0.3s ease;
}

.cert-list li:hover {
  transform: translateX(5px);
  background: #f0f7f4;
  color: #42b883;
}

.cert-list li::before {
  content: "🏆";
  position: absolute;
  left: 0.8rem;
}

.interests {
  grid-column: 1 / -1;
}

.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tag {
  background: #f0f7f4;
  color: #42b883;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  cursor: pointer;
}

.tag:hover {
  background: #42b883;
  color: #fff;
  transform: translateY(-3px) scale(1.05);
  border-color: #42b883;
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.2);
}

.skill-link {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding-right: 1.2em;
}

.skill-link::after {
  content: '↗';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
  opacity: 0;
  transition: all 0.3s ease;
}

.skill-link:hover {
  color: #42b883;
  padding-right: 1.5em;
}

.skill-link:hover::after {
  opacity: 1;
  transform: translate(0.2em, -50%);
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .eval-list {
    grid-template-columns: 1fr;
  }

  .education,
  .skills,
  .projects,
  .certifications,
  .interests {
    grid-column: 1 / -1;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
    padding-bottom: 5rem;
    border-radius: 0;
  }

  .about-content {
    padding: 0.5rem;
    background: none;
    gap: 1rem;
  }

  section {
    padding: 1.2rem;
    margin-bottom: 0.8rem;
  }

  .self-evaluation {
    order: 1;
  }

  .education {
    order: 2;
  }

  .skills {
    order: 3;
  }

  .projects {
    order: 4;
  }

  .certifications {
    order: 5;
  }

  .interests {
    order: 6;
    margin-bottom: 4rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 