import SongItem from "../../components/AppSongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("router", () => {
    test("renders router link", () => {
        const song = {
            docId: "abd"
        }

        const wrapper = shallowMount(SongItem, {
            propsData: { song },
            global: {
                components: {
                    "RouterLink": RouterLinkStub,
                }
            }
        })

        expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({ name: 'song', params: { id: song.docId } })
    })
})