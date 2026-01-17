/**
 * @generated SignedSource<<2f4116861677817d6375829110d06c95>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useRepositoryQueryQuery$variables = {
  first?: number | null | undefined;
  query: string;
};
export type useRepositoryQueryQuery$data = {
  readonly search: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description?: string | null | undefined;
        readonly forkCount?: number;
        readonly id?: string;
        readonly licenseInfo?: {
          readonly name: string;
        } | null | undefined;
        readonly name?: string;
        readonly owner?: {
          readonly login: string;
        };
        readonly primaryLanguage?: {
          readonly color: string | null | undefined;
          readonly name: string;
        } | null | undefined;
        readonly repositoryTopics?: {
          readonly nodes: ReadonlyArray<{
            readonly topic: {
              readonly name: string;
            };
          } | null | undefined> | null | undefined;
        };
        readonly stargazerCount?: number;
        readonly updatedAt?: any;
        readonly url?: any;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
};
export type useRepositoryQueryQuery = {
  response: useRepositoryQueryQuery$data;
  variables: useRepositoryQueryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 10,
  "kind": "LocalArgument",
  "name": "first"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v2 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v3 = {
  "kind": "Literal",
  "name": "type",
  "value": "REPOSITORY"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v12 = [
  (v5/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v18 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  (v2/*: any*/),
  (v3/*: any*/)
],
v19 = [
  (v5/*: any*/),
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useRepositoryQueryQuery",
    "selections": [
      {
        "alias": "search",
        "args": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "__RepositoryList_search_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "owner",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "License",
                        "kind": "LinkedField",
                        "name": "licenseInfo",
                        "plural": false,
                        "selections": (v12/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Language",
                        "kind": "LinkedField",
                        "name": "primaryLanguage",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v14/*: any*/),
                        "concreteType": "RepositoryTopicConnection",
                        "kind": "LinkedField",
                        "name": "repositoryTopics",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "RepositoryTopic",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Topic",
                                "kind": "LinkedField",
                                "name": "topic",
                                "plural": false,
                                "selections": (v12/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "repositoryTopics(first:10)"
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": null
              },
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useRepositoryQueryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v18/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v15/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "owner",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          (v6/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "License",
                        "kind": "LinkedField",
                        "name": "licenseInfo",
                        "plural": false,
                        "selections": (v19/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Language",
                        "kind": "LinkedField",
                        "name": "primaryLanguage",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v13/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v14/*: any*/),
                        "concreteType": "RepositoryTopicConnection",
                        "kind": "LinkedField",
                        "name": "repositoryTopics",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "RepositoryTopic",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Topic",
                                "kind": "LinkedField",
                                "name": "topic",
                                "plural": false,
                                "selections": (v19/*: any*/),
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "repositoryTopics(first:10)"
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v17/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v18/*: any*/),
        "filters": [
          "query",
          "type"
        ],
        "handle": "connection",
        "key": "RepositoryList_search",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "edd88844989d0a2215100e6285039787",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": "first",
          "cursor": null,
          "direction": "forward",
          "path": [
            "search"
          ]
        }
      ]
    },
    "name": "useRepositoryQueryQuery",
    "operationKind": "query",
    "text": "query useRepositoryQueryQuery(\n  $query: String!\n  $first: Int = 10\n) {\n  search(query: $query, type: REPOSITORY, first: $first) {\n    edges {\n      node {\n        __typename\n        ... on Repository {\n          id\n          name\n          owner {\n            __typename\n            login\n            id\n          }\n          stargazerCount\n          forkCount\n          updatedAt\n          url\n          description\n          licenseInfo {\n            name\n            id\n          }\n          primaryLanguage {\n            name\n            color\n            id\n          }\n          repositoryTopics(first: 10) {\n            nodes {\n              topic {\n                name\n                id\n              }\n              id\n            }\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f91e23cf867e1747f293d58a0a020f4d";

export default node;
