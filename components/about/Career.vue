<template>
  <div>
    <h2 class="articleTtl">
      Career
    </h2>
    <div v-for="career in careers" :key="career.id" class="career about-section">
      <div class="name">
        {{ career.name }} : {{ career.start }} ~ {{ career.end }}
      </div>
      <div>
        <p class="summary">
          {{ career.summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import moment from 'moment'

@Component
export default class Career extends Vue {
  careers: {
    id: number
    name: string
    summary: string
    start: string
    end: string
  }[] = [
    {
      id: 1,
      name: '個人事業主',
      summary: '通信事業向けCRMシステムの開発案件に参画中。Laravel,React.jsを使用したフロント・サーバーサイドを担当。',
      start: moment('2020-02-01T00:00:00').format('YYYY.MM'),
      end: moment(new Date().toISOString()).format('YYYY.MM')
    },
    {
      id: 2,
      name: '株式会社アグレックス',
      summary: '金融系業務アプリケーションの開発・保守を担当',
      start: moment('2016-08-01T00:00:00').format('YYYY.MM'),
      end: moment('2020-01-01T00:00:00').format('YYYY.MM'),
    }
  ]
}
</script>

<style scoped>

.name{
  font-size: 2rem;
  margin-bottom: 1rem;
}

.summary{
  font-size: 1.5rem;
  padding: 0 2rem;
}
</style>
