/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useRepositoryQueryQuery$variables = {
  first?: number | null | undefined;
  query: string;
};
export type useRepositoryQueryQuery$data = {
  readonly search: {
    readonly edges:
      | ReadonlyArray<
          | {
              readonly node:
                | {
                    readonly description?: string | null | undefined;
                    readonly id?: string;
                    readonly name?: string;
                    readonly owner?: {
                      readonly login: string;
                    };
                    readonly stargazerCount?: number;
                    readonly url?: any;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};
export type useRepositoryQueryQuery = {
  response: useRepositoryQueryQuery$data;
  variables: useRepositoryQueryQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: 10,
      kind: "LocalArgument",
      name: "first",
    },
    v1 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "query",
    },
    v2 = {
      kind: "Variable",
      name: "query",
      variableName: "query",
    },
    v3 = {
      kind: "Literal",
      name: "type",
      value: "REPOSITORY",
    },
    v4 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "id",
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "name",
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "login",
      storageKey: null,
    },
    v7 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "stargazerCount",
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "url",
      storageKey: null,
    },
    v9 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "description",
      storageKey: null,
    },
    v10 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "__typename",
      storageKey: null,
    },
    v11 = {
      alias: null,
      args: null,
      kind: "ScalarField",
      name: "cursor",
      storageKey: null,
    },
    v12 = {
      alias: null,
      args: null,
      concreteType: "PageInfo",
      kind: "LinkedField",
      name: "pageInfo",
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "endCursor",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "hasNextPage",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
    v13 = [
      {
        kind: "Variable",
        name: "first",
        variableName: "first",
      },
      v2 /*: any*/,
      v3 /*: any*/,
    ];
  return {
    fragment: {
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: "Fragment",
      metadata: null,
      name: "useRepositoryQueryQuery",
      selections: [
        {
          alias: "search",
          args: [v2 /*: any*/, v3 /*: any*/],
          concreteType: "SearchResultItemConnection",
          kind: "LinkedField",
          name: "__RepositoryList_search_connection",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "SearchResultItemEdge",
              kind: "LinkedField",
              name: "edges",
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [
                        v4 /*: any*/,
                        v5 /*: any*/,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "owner",
                          plural: false,
                          selections: [v6 /*: any*/],
                          storageKey: null,
                        },
                        v7 /*: any*/,
                        v8 /*: any*/,
                        v9 /*: any*/,
                      ],
                      type: "Repository",
                      abstractKey: null,
                    },
                    v10 /*: any*/,
                  ],
                  storageKey: null,
                },
                v11 /*: any*/,
              ],
              storageKey: null,
            },
            v12 /*: any*/,
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: "Operation",
      name: "useRepositoryQueryQuery",
      selections: [
        {
          alias: null,
          args: v13 /*: any*/,
          concreteType: "SearchResultItemConnection",
          kind: "LinkedField",
          name: "search",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "SearchResultItemEdge",
              kind: "LinkedField",
              name: "edges",
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: false,
                  selections: [
                    v10 /*: any*/,
                    {
                      kind: "InlineFragment",
                      selections: [
                        v4 /*: any*/,
                        v5 /*: any*/,
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "owner",
                          plural: false,
                          selections: [v10 /*: any*/, v6 /*: any*/, v4 /*: any*/],
                          storageKey: null,
                        },
                        v7 /*: any*/,
                        v8 /*: any*/,
                        v9 /*: any*/,
                      ],
                      type: "Repository",
                      abstractKey: null,
                    },
                    {
                      kind: "InlineFragment",
                      selections: [v4 /*: any*/],
                      type: "Node",
                      abstractKey: "__isNode",
                    },
                  ],
                  storageKey: null,
                },
                v11 /*: any*/,
              ],
              storageKey: null,
            },
            v12 /*: any*/,
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v13 /*: any*/,
          filters: ["query", "type"],
          handle: "connection",
          key: "RepositoryList_search",
          kind: "LinkedHandle",
          name: "search",
        },
      ],
    },
    params: {
      cacheID: "024a3727016060bd78e28f3f939da0c8",
      id: null,
      metadata: {
        connection: [
          {
            count: "first",
            cursor: null,
            direction: "forward",
            path: ["search"],
          },
        ],
      },
      name: "useRepositoryQueryQuery",
      operationKind: "query",
      text: "query useRepositoryQueryQuery(\n  $query: String!\n  $first: Int = 10\n) {\n  search(query: $query, type: REPOSITORY, first: $first) {\n    edges {\n      node {\n        __typename\n        ... on Repository {\n          id\n          name\n          owner {\n            __typename\n            login\n            id\n          }\n          stargazerCount\n          url\n          description\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "2aabb270a62ad8a146b562bd1fe40b1f";

export default node;
