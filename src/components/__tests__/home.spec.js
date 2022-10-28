import { shallowMount } from "@vue/test-utils";
import Home from "../../views/HomeView.vue";
import SongItem from "../../components/AppSongItem.vue";
import { expect } from "vitest";

describe("Home.vue", () => {
    test("renders list of songs", () => {
        const songs = [
            {}, {}, {},
        ];

        const component = shallowMount(Home, {
            data() {
                return {
                    songs,
                }
            },
            global: {
                mocks: {
                    $t: (message) => message,
                }
            }
        });

        const items = component.findAllComponents(SongItem);

        expect(items).toHaveLength(songs.length);

        items.forEach((wrapper, i) => {
            expect(wrapper.props().song).toStrictEqual(songs[i]);
        })
    });
});