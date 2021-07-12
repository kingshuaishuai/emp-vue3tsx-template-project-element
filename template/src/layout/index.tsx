import { defineComponent } from 'vue'
import { ElCol, ElRow } from 'element-plus'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    console.log('slots', slots.default)
    console.log(slots.default)
    return () => {
      return (
        <div class="app-wrapper">
          <ElRow>
            <ElCol span={6}>
              <div>left</div>
            </ElCol>
            <ElCol span={18}>
              <RouterView />
            </ElCol>
          </ElRow>
        </div>
      )
    }
  },
})
