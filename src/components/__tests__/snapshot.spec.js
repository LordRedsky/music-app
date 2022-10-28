import SongItem from "../../components/AppSongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, test } from "vitest";


describe("Snapshot SongItem.vue", () => {
    test("renders correctly", () => {
        const song = {
            docId: "abc",
            modified_name: "test",
            display_name: "test",
            comment_count: 5,
        };

        const wrapper = shallowMount(SongItem, {
            propsData: { song },
            global: {
                components: {
                    "RouterLink": RouterLinkStub,
                }
            }
        })

        expect(wrapper.element).toMatchInlineSnapshot(`
          <li
            class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50 example song-id-abc"
          >
            <div>
              <router-link-stub
                class="font-bold block text-gray-600"
                custom="false"
                to="[object Object]"
              />
              <span
                class="text-gray-500 text-sm"
              >
                test
              </span>
            </div>
            <div
              class="text-gray-600 text-lg"
            >
              <router-link-stub
                custom="true"
                to="[object Object]"
              />
            </div>
          </li>
        `);
    })
})