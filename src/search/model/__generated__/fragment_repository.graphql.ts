/**
 * @generated SignedSource<<8c415887b77293e2b92a1215ee29254a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fragment_repository$data = {
  readonly description: string | null | undefined;
  readonly forkCount: number;
  readonly id: string;
  readonly licenseInfo: {
    readonly name: string;
  } | null | undefined;
  readonly name: string;
  readonly owner: {
    readonly login: string;
  };
  readonly primaryLanguage: {
    readonly color: string | null | undefined;
    readonly name: string;
  } | null | undefined;
  readonly repositoryTopics: {
    readonly nodes: ReadonlyArray<{
      readonly topic: {
        readonly name: string;
      };
    } | null | undefined> | null | undefined;
  };
  readonly stargazerCount: number;
  readonly updatedAt: any;
  readonly url: any;
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "fragment_repository";
};
export type fragment_repository$key = {
  readonly " $data"?: fragment_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"fragment_repository">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "fragment_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "owner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "login",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "stargazerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "forkCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "License",
      "kind": "LinkedField",
      "name": "licenseInfo",
      "plural": false,
      "selections": (v1/*: any*/),
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "color",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
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
              "selections": (v1/*: any*/),
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
};
})();

(node as any).hash = "eec648d02129b7acfacf46b36c245538";

export default node;
