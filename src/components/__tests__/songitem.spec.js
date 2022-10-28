import SongItem from "../../components/AppSongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { expect } from "vitest";

describe("SongItem.vue", () => {
    test("render song.display_name", () => {
        const song = {
            display_name: "test",
        }

        const wrapper = shallowMount(SongItem, {
            propsData: {
                song,
            },
            global: {
                components: {
                    'RouterLink': RouterLinkStub
                }
            }
        })

        const compositionAuthor = wrapper.find(".text-gray-500")

        expect(compositionAuthor.text()).toBe(song.display_name)
    });

    test("renders song.docId in id attributes", () => {
        const song = {
            docId: "abc",
        }

        const wrapper = shallowMount(SongItem, {
            propsData: {
                song,
            },
            global: {
                components: {
                    'RouterLink': RouterLinkStub
                }
            },
        });

        // expect(wrapper.attributes().id).toBe(`song-id-${song.docId}`)

        expect(wrapper.classes()).toContain(`song-id-${song.docId}`)
    });
})