import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import PostList from "./post/List";
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from './createRelayEnvironment';

type Props = {};

class Main extends Component {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
          <View style={{ flex: 1 }}>
              <QueryRenderer
                  environment={environment}

                  query={graphql`
                    query MainPostsQuery {
                      posts {
                        id
                        body
                        title
                      }
                    }
                  `}

                  render={({error, props}) => {
                      if (error) {
                          return <Text>{error.message}</Text>;
                      } else if (props) {
                          console.log(props.posts);
                          return <Text>SUCCESS</Text>;
                      }
                      return <Text>Loading</Text>;
                  }}
              />
          </View>
        );
    }
}

export default Main;
