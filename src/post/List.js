import React, { Component } from "react";
import {
  Text,
  View,
} from "react-native";

type Props = {};

class List extends Component {
    constructor(props: Props) {
        super(props);

        this.state = {
            posts: [
                { title: "title1", body: "body1" },
                { title: "title2", body: "body2" },
                { title: "title3", body: "body3" },
                { title: "title4", body: "body4" },
            ],
        };
    }
    
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                { this.state.posts.map((post, i) => {
                    return (
                        <Text key={i}>{post.title} {post.body}</Text>
                    );
                })}
            </View>
        );
    }
}

export default List;
